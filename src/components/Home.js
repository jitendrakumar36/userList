import { Box, Button, Card, CardActions, CardContent, Container, Grid, Modal, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import User from './User.json';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import './style.css'

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [search, setSearch] = useState('')
    console.log(search)

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 100;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = User.slice(firstIndex, lastIndex);
    const npage = Math.ceil(User.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    let total = User.length;

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const changePage = (id) => {
        setCurrentPage(id)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const dropPagiOptions = [
        { key: 1, text: 25, value: 25 }, { key: 2, text: 50, value: 50 },
        { key: 3, text: 75, value: 75 }, { key: 4, text: 100, value: 100 },
    ];
    return (
        <Box>
            <Container>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <header><Button onClick={handleClose} startIcon={<CloseIcon />}>Closed </Button></header>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Please view User Details
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            user Details
                        </Typography>
                    </Box>
                </Modal>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box style={{ display: "flex" }}>
                            <Typography variant='h6'>Records :</Typography>
                            <Typography variant='h5' style={{ fontWeight: "700" }}> {total}</Typography>
                            <Box Component="form" style={{ marginLeft: "0.5rem" }}>
                                <TextField
                                    label="Search"
                                    id="filled-size-small"
                                    size="small"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <nav>
                            <ul className='pagination' style={{ marginTop: "0" }}>
                                <li>
                                    <Button onClick={prePage} variant='contained'> Prev</Button>
                                </li>
                                {
                                    numbers.map((n, i) => {
                                        return (
                                            <li key={i} className={`page-item ${currentPage === n ? "active" : ""}`}>
                                                <Link to="#" onClick={() => changePage(n)}> {n}</Link>
                                            </li>
                                        )
                                    })
                                }
                                <li>
                                    <Button onClick={nextPage} variant='contained'> Next</Button>
                                </li>
                            </ul>
                        </nav>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='h6'>100 Records</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {
                        records.filter((item) => {
                            return (search.toLocaleLowerCase() === '' ? item : item.first_name.toLocaleLowerCase().includes(search))
                        }).map((item, i) => {
                            return (
                                <Grid item xs={4} key={i}>
                                    <Card>
                                        <CardContent
                                            style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 10px" }}>
                                            <Typography gutterBottom variant="h6" style={{ marginBottom: "0" }}>
                                                User Id :  {item.id}
                                            </Typography>
                                            <Typography variant="h6" color="text.secondary">
                                                Emp Id : {item.emp_id}
                                            </Typography>
                                        </CardContent>
                                        <CardContent
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between", padding: "0rem 10px"
                                            }}>
                                            <Typography gutterBottom variant="body1">
                                                First Name :  {item.first_name}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                Last Name :  {item.last_name ? item.last_name : "NA"}
                                            </Typography>
                                        </CardContent>
                                        <CardContent
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between", padding: "0.5rem 10px"
                                            }}>
                                            <Typography gutterBottom variant="body1">
                                                Location :  {item.work_location}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                Joining :  {item.doj ? item.doj : "NA"}
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ justifyContent: "flex-end", borderTop: "1px solid #f5f5f5" }}>
                                            <Stack direction="row" spacing={2}>

                                                <Button onClick={handleOpen} size="small" variant="contained" startIcon={<VisibilityIcon />}>View</Button>
                                                <Button size="small" variant="contained" startIcon={<ModeEditIcon />}>Edit</Button>
                                                <Button size="small" variant="contained" style={{ backgroundColor: "red" }} startIcon={<DeleteIcon />}>Delete</Button>
                                            </Stack>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        }
                        )
                    }
                </Grid>
                <nav>
                    <ul className='pagination'>
                        <li>
                            <Button onClick={prePage} variant='contained'> Prev</Button>
                        </li>
                        {
                            numbers.map((n, i) => {
                                return (
                                    <li key={i} className={`page-item ${currentPage === n ? "active" : ""}`}>
                                        <Link to="#" onClick={() => changePage(n)}> {n}</Link>
                                    </li>
                                )
                            })
                        }
                        <li>
                            <Button onClick={nextPage} variant='contained'> Next</Button>
                        </li>
                    </ul>
                </nav>
            </Container>
        </Box>
    )
}

export default Home;



