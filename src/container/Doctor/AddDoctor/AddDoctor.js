import { Button, Container, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const AddDoctor = (props) => {
    return(
        <Container fixed>
            <Grid container spacing={2}>
            <Grid item xs={8} md={8}>
                <div style={{width:"100%", background: "#eee" }}>
                    <Grid container spacing={2}>
                    <Grid item md={5}>
                        <TextField
                    label="First Name"
                    id="outlined-size-small"
                    variant="outlined"
                    value=""
                    size="small"
                    />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Last Name"
                            id="outlined-size-small"
                            variant="outlined"
                            value=""
                            size="small"
                            />
                    </Grid>
                    <Grid item md={5}>
                        <TextField
                            label="E-mail"
                            id="outlined-size-small"
                            variant="outlined"
                            value=""
                            size="small"
                            />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Number"
                            id="outlined-size-small"
                            variant="outlined"
                            value=""
                            size="small"
                            />
                    </Grid>
                    
                    <Grid item md={5}>
                    <InputLabel id="demo-simple-select-helper-label">Current City</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Current City"
                        variant="outlined"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item md={6}>
                    <TextField
                        id="outlined-multiline-static"
                        label="address"
                        varient="outlined"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        />
                    </Grid>
                    </Grid>

                    <Button variant="contained">Submit</Button>
                </div>
                
            </Grid>
            <Grid item xs={4} md={4}>
            <p>xs=4</p>
            </Grid>
            <Grid item xs={4}>
            <p>xs=4</p>
            </Grid>
            <Grid item xs={8}>
            <p style={{background: "red"}}>xs=8</p>
            </Grid>
            </Grid>
        </Container>
        
    )
}

export default AddDoctor;