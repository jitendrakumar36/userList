import {
    Box, Button, Card, CardActions, CardContent, Container, Grid, Modal, Stack,
    Typography, Select, MenuItem, FormControl, InputLabel, Table, TableBody, TableCell, TableRow
} from '@mui/material';
import React, { useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
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
    const [perPageProduct, setPerPageProduct] = useState('100');

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = perPageProduct;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = User.slice(firstIndex, lastIndex);
    const npage = Math.ceil(User.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    let total = User.length;

    const title = { padding: ".2rem 0.3rem", borderRight: "1px solid #ccc" }

    const handleChange = (e) => {
        setPerPageProduct(e.target.value);
    };

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
    }

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
                            Please Edit User Details
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
                            <Box component="form" style={{ marginLeft: "0.5rem" }}>
                                <TextField
                                    label="Search"
                                    id="filled-size-small"
                                    size="small"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
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
                    <Grid item xs={1}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Per Page</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={perPageProduct}
                                label="Per Page"
                                onChange={handleChange}
                                size="small"
                                placeholder="Select Number"
                            >
                                <MenuItem value={100}>100</MenuItem>
                                <MenuItem value={200}>200</MenuItem>
                                <MenuItem value={300}>300</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    {
                        records.filter((item) => {
                            return (search.toLocaleLowerCase() === '' ? item : item.first_name.toLocaleLowerCase().includes(search))
                        }).map((item, i) => {
                            return (
                                <Grid item xs={4} key={i}>
                                    <Card>
                                        <CardContent style={{ padding: "0.5rem" }}>
                                            <Table sx={{ minWidth: "100%", border: "1px solid #ccc", borderBottom: "none" }} aria-label="simple table">
                                                <TableBody>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title} >Emp id</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>
                                                            {item.emp_id ? item.emp_id :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>dept_id</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>{item.dept_id ? item.dept_id :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>Doc Collection</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>
                                                            {item.designation_by_doc_collection ? item.designation_by_doc_collection :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>Collection Id</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>
                                                            {item.document_collection_id ? item.document_collection_id :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>Doj</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>{item.doj ? item.doj :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>Emp Name</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>{item.emp_name ? item.emp_name :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>Id</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>{item.id ? item.id :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>Interview id</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>{item.interview_id ? item.interview_id :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>Job function</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>{item.job_function ? item.job_function :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>Job opening id</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>{item.job_opening_id ? item.job_opening_id :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>Job role</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>{item.job_role ? item.job_role :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>Offline status</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>{item.offline_status ? item.offline_status :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>Onboarding</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>
                                                            {item.onboarding_status ? item.onboarding_status :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>Recruiter</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>{item.recruiter ? item.recruiter :"null"}</TableCell>
                                                    </TableRow>
                                                    <TableRow sx={{ '&:last-child td, &:last-child td': { borderBottom: "1px solid #ccc" } }}>
                                                        <TableCell align="left" style={title}>Work_location</TableCell>
                                                        <TableCell align="right" style={{ padding: ".2rem 0.3rem" }}>{item.work_location ? item.work_location :"null"}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                        <CardActions style={{ justifyContent: "flex-end", borderTop: "1px solid #f5f5f5" }}>
                                            <Stack direction="row" spacing={2}>
                                                <Button onClick={handleOpen} size="small" variant="contained" startIcon={<ModeEditIcon />}>Edit</Button>
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



