import React from "react";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { FormControl, FormControlLabel, FormLabel, TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useHistory } from "react-router-dom";



export default function Create() {

    //useHistory hook can be used to access the history instance used by react router.
    const history = useHistory()

    const [title, setTitle] = React.useState("") //state can be used to set the title of a note
    const [details, setDetails] = React.useState("") //state can be used to set the details of a note
    const [titleError, setTitleError] = React.useState(false) //state can be used to avoid empty note title
    const [detailsError, setDetailsError] = React.useState(false)//state can be used to avoid empty note details
    const [category, setCategory] = React.useState("money")//state can be used to set the note category


    const handleSubmit = (e) =>{
        e.preventDefault() //Prevent page refresh after clicking submit button
        setTitleError(false)
        setDetailsError(false)

        //checks if title text field is empty
        if(title === ''){
            setTitleError(true)
        }

        //checks if details text field is empty
        if(details === ''){
            setDetailsError(true)
        }

        if(title && details) {
            //sending a POST request to add data to the notes array
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({title, details, category}) 
            }).then(() => history.push('/')) //redirect the user back to notes component when submit
            
        }
    }
 
    return(
        <Container>
            <Typography
            variant="h6"
            component="h2"
            gutterBottom
            >
            Create a New Note
            </Typography>
            
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    label="Note title"
                    variant="outlined"
                    sx={{
                        marginBottom:2,
                        marginTop:2, 
                        display: 'block'
                       
                    }}
                    fullWidth
                    required
                    error= {titleError}
                />
                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    label="Details"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{
                        marginBottom:2,
                        marginTop:2, 
                        display: 'block'
                       
                    }}
                    fullWidth
                    required
                    error={detailsError}
                />
                <FormControl sx={{
                    marginTop: 2,
                    marginBottom:2,
                    display:'block'
                }}>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)} >
                        <FormControlLabel value="money" control={<Radio/>} label="Money"/>
                        <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
                        <FormControlLabel value="reminders" control={<Radio/>} label="Reminders"/>
                        <FormControlLabel value="work" control={<Radio/>} label="Work"/>
                    </RadioGroup>
                </FormControl>
                
                <Button
                endIcon = {<KeyboardArrowRightIcon/>}
                type="submit"
                variant="contained">Submit</Button>
            </form>
        </Container>
    )
}