import { Box, Button, Card, CardActions, CardContent, Container, Grid, Modal, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';

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

const userdetails = [
    { "id": 1817, "emp_id": 101841, "company_id": null, "dept_id": 46, "onboarding_status": 1, "first_name": "Parameshwar", "middle_name": null, "last_name": null, "document_collection_id": 1342, "interview_id": 4610, "created_at": "2023-12-27T08:48:53.000000Z", "updated_at": "2023-12-27T08:48:53.000000Z", "status": 1, "source_code": null, "basic_salary": null, "others_mol": null, "gross_mol": null, "actual_salary": null, "job_role": "Relationship Officer- Cards", "function_name": null, "employee_status": null, "location": null, "tl_id": null, "tl_name": null, "country": null, "work_location": "DUBAI", "vintage_days": null, "vintage_updated_date": null, "designation_by_doc_collection": 43, "job_function": 2, "job_function_name": null, "offline_status": 1, "emp_name": "Parameshwar", "emp_check_payout_status": null, "mismatch_key": null, "payout_location_status": null, "payout_bank_status": null, "payout_bank": null, "recruiter": 16, "recruiter_name": null, "document_id_status": null, "payout_update_status": null, "update_comment": null, "job_opening_id": 32, "doj": "2023-12-27", "target": null, "product": null, "pre_offline_status": null, "range_id": null, "export_name": null },
    { "id": 1816, "emp_id": 101840, "company_id": null, "dept_id": 46, "onboarding_status": 1, "first_name": "ABDUL", "middle_name": null, "last_name": "HANAN", "document_collection_id": 1323, "interview_id": 4552, "created_at": "2023-12-27T08:46:31.000000Z", "updated_at": "2023-12-27T08:46:31.000000Z", "status": 1, "source_code": null, "basic_salary": null, "others_mol": null, "gross_mol": null, "actual_salary": null, "job_role": "Relationship Officer- Cards", "function_name": null, "employee_status": null, "location": null, "tl_id": null, "tl_name": null, "country": null, "work_location": "DUBAI", "vintage_days": null, "vintage_updated_date": null, "designation_by_doc_collection": 43, "job_function": 2, "job_function_name": null, "offline_status": 1, "emp_name": "ABDUL HANAN", "emp_check_payout_status": null, "mismatch_key": null, "payout_location_status": null, "payout_bank_status": null, "payout_bank": null, "recruiter": 64, "recruiter_name": null, "document_id_status": null, "payout_update_status": null, "update_comment": null, "job_opening_id": 32, "doj": "2023-12-27", "target": null, "product": null, "pre_offline_status": null, "range_id": null, "export_name": null },
    { "id": 1815, "emp_id": 101839, "company_id": null, "dept_id": 46, "onboarding_status": 1, "first_name": "ABDUL", "middle_name": null, "last_name": "HANAN", "document_collection_id": 1323, "interview_id": 4552, "created_at": "2023-12-27T08:46:31.000000Z", "updated_at": "2023-12-27T08:46:31.000000Z", "status": 1, "source_code": null, "basic_salary": null, "others_mol": null, "gross_mol": null, "actual_salary": null, "job_role": "Relationship Officer- Cards", "function_name": null, "employee_status": null, "location": null, "tl_id": null, "tl_name": null, "country": null, "work_location": "DUBAI", "vintage_days": null, "vintage_updated_date": null, "designation_by_doc_collection": 43, "job_function": 2, "job_function_name": null, "offline_status": 1, "emp_name": "ABDUL HANAN", "emp_check_payout_status": null, "mismatch_key": null, "payout_location_status": null, "payout_bank_status": null, "payout_bank": null, "recruiter": 64, "recruiter_name": null, "document_id_status": null, "payout_update_status": null, "update_comment": null, "job_opening_id": 32, "doj": "2023-12-27", "target": null, "product": null, "pre_offline_status": null, "range_id": null, "export_name": null },
    { "id": 1814, "emp_id": 101838, "company_id": null, "dept_id": 46, "onboarding_status": 1, "first_name": "MAHMOOD", "middle_name": null, "last_name": "HUSSAINI", "document_collection_id": 1319, "interview_id": 4558, "created_at": "2023-12-27T08:44:45.000000Z", "updated_at": "2023-12-27T08:44:45.000000Z", "status": 1, "source_code": null, "basic_salary": null, "others_mol": null, "gross_mol": null, "actual_salary": null, "job_role": "Relationship Officer- Cards", "function_name": null, "employee_status": null, "location": null, "tl_id": null, "tl_name": null, "country": null, "work_location": "DUBAI", "vintage_days": null, "vintage_updated_date": null, "designation_by_doc_collection": 43, "job_function": 2, "job_function_name": null, "offline_status": 1, "emp_name": "MAHMOOD HUSSAINI SYED", "emp_check_payout_status": null, "mismatch_key": null, "payout_location_status": null, "payout_bank_status": null, "payout_bank": null, "recruiter": 64, "recruiter_name": null, "document_id_status": null, "payout_update_status": null, "update_comment": null, "job_opening_id": 32, "doj": "2023-12-27", "target": null, "product": null, "pre_offline_status": null, "range_id": null, "export_name": null },
    { "id": 1813, "emp_id": 101798, "company_id": null, "dept_id": 49, "onboarding_status": 1, "first_name": "Arman", "middle_name": null, "last_name": "Liaqat", "document_collection_id": 1020, "interview_id": 2669, "created_at": "2023-12-26T11:37:18.000000Z", "updated_at": "2023-12-26T11:37:18.000000Z", "status": 1, "source_code": null, "basic_salary": null, "others_mol": null, "gross_mol": null, "actual_salary": null, "job_role": "Relationship Officer- Cards", "function_name": null, "employee_status": null, "location": null, "tl_id": null, "tl_name": null, "country": null, "work_location": "DUBAI", "vintage_days": null, "vintage_updated_date": null, "designation_by_doc_collection": 64, "job_function": 2, "job_function_name": null, "offline_status": 1, "emp_name": "Arman Liaqat", "emp_check_payout_status": null, "mismatch_key": null, "payout_location_status": null, "payout_bank_status": null, "payout_bank": null, "recruiter": 18, "recruiter_name": null, "document_id_status": null, "payout_update_status": null, "update_comment": null, "job_opening_id": 57, "doj": "2023-12-26", "target": null, "product": null, "pre_offline_status": null, "range_id": null, "export_name": null },
    { "id": 1812, "emp_id": 101826, "company_id": null, "dept_id": 46, "onboarding_status": 1, "first_name": "Faisal", "middle_name": null, "last_name": "Mohammed", "document_collection_id": 1336, "interview_id": 4265, "created_at": "2023-12-26T08:41:45.000000Z", "updated_at": "2023-12-26T13:25:38.000000Z", "status": 1, "source_code": null, "basic_salary": null, "others_mol": null, "gross_mol": null, "actual_salary": null, "job_role": "Relationship Officer- Loans", "function_name": null, "employee_status": null, "location": null, "tl_id": "1491", "tl_name": null, "country": null, "work_location": "DUBAI", "vintage_days": null, "vintage_updated_date": null, "designation_by_doc_collection": 44, "job_function": 2, "job_function_name": null, "offline_status": 1, "emp_name": "Faisal Mohammed Haji", "emp_check_payout_status": null, "mismatch_key": null, "payout_location_status": null, "payout_bank_status": null, "payout_bank": null, "recruiter": 51, "recruiter_name": null, "document_id_status": null, "payout_update_status": null, "update_comment": null, "job_opening_id": 34, "doj": "2023-12-26", "target": null, "product": null, "pre_offline_status": null, "range_id": null, "export_name": null },
    { "id": 1811, "emp_id": 101804, "company_id": null, "dept_id": 49, "onboarding_status": 1, "first_name": "Ajanya", "middle_name": null, "last_name": "Raj", "document_collection_id": 1128, "interview_id": 3917, "created_at": "2023-12-26T08:39:36.000000Z", "updated_at": "2023-12-26T08:39:36.000000Z", "status": 1, "source_code": null, "basic_salary": null, "others_mol": null, "gross_mol": null, "actual_salary": null, "job_role": "Relationship Officer- Cards", "function_name": null, "employee_status": null, "location": null, "tl_id": null, "tl_name": null, "country": null, "work_location": "DUBAI", "vintage_days": null, "vintage_updated_date": null, "designation_by_doc_collection": 64, "job_function": 2, "job_function_name": null, "offline_status": 1, "emp_name": "Ajanya Raj Geetha", "emp_check_payout_status": null, "mismatch_key": null, "payout_location_status": null, "payout_bank_status": null, "payout_bank": null, "recruiter": 51, "recruiter_name": null, "document_id_status": null, "payout_update_status": null, "update_comment": null, "job_opening_id": 58, "doj": "2023-12-25", "target": null, "product": null, "pre_offline_status": null, "range_id": null, "export_name": null },
    { "id": 1810, "emp_id": 101803, "company_id": null, "dept_id": 49, "onboarding_status": 1, "first_name": "MUHAMMAD", "middle_name": null, "last_name": "WAQAR", "document_collection_id": 1116, "interview_id": 3910, "created_at": "2023-12-26T06:58:07.000000Z", "updated_at": "2023-12-26T06:58:07.000000Z", "status": 1, "source_code": null, "basic_salary": null, "others_mol": null, "gross_mol": null, "actual_salary": null, "job_role": "Relationship Officer- Cards", "function_name": null, "employee_status": null, "location": null, "tl_id": null, "tl_name": null, "country": null, "work_location": "DUBAI", "vintage_days": null, "vintage_updated_date": null, "designation_by_doc_collection": 64, "job_function": 2, "job_function_name": null, "offline_status": 1, "emp_name": "MUHAMMAD WAQAR AZIZ", "emp_check_payout_status": null, "mismatch_key": null, "payout_location_status": null, "payout_bank_status": null, "payout_bank": null, "recruiter": 18, "recruiter_name": null, "document_id_status": null, "payout_update_status": null, "update_comment": null, "job_opening_id": 57, "doj": "2023-12-23", "target": null, "product": null, "pre_offline_status": null, "range_id": null, "export_name": null },
    { "id": 1809, "emp_id": 101837, "company_id": null, "dept_id": 9, "onboarding_status": 1, "first_name": "Amir", "middle_name": null, "last_name": "Baig", "document_collection_id": 1062, "interview_id": 3733, "created_at": "2023-12-26T06:25:02.000000Z", "updated_at": "2023-12-26T06:25:02.000000Z", "status": 1, "source_code": null, "basic_salary": null, "others_mol": null, "gross_mol": null, "actual_salary": null, "job_role": "Relationship Officer- Loans", "function_name": null, "employee_status": null, "location": null, "tl_id": null, "tl_name": null, "country": null, "work_location": "DUBAI", "vintage_days": null, "vintage_updated_date": null, "designation_by_doc_collection": 5, "job_function": 2, "job_function_name": null, "offline_status": 1, "emp_name": "Amir Baig", "emp_check_payout_status": null, "mismatch_key": null, "payout_location_status": null, "payout_bank_status": null, "payout_bank": null, "recruiter": 22, "recruiter_name": null, "document_id_status": null, "payout_update_status": null, "update_comment": null, "job_opening_id": 13, "doj": "2023-12-26", "target": null, "product": null, "pre_offline_status": null, "range_id": null, "export_name": null },
    { "id": 1808, "emp_id": 101836, "company_id": null, "dept_id": 9, "onboarding_status": 1, "first_name": "Emerson", "middle_name": null, "last_name": "Z.Lucero", "document_collection_id": 1067, "interview_id": 3535, "created_at": "2023-12-26T06:23:42.000000Z", "updated_at": "2023-12-26T06:23:42.000000Z", "status": 1, "source_code": null, "basic_salary": null, "others_mol": null, "gross_mol": null, "actual_salary": null, "job_role": "Relationship Officer- Loans", "function_name": null, "employee_status": null, "location": null, "tl_id": null, "tl_name": null, "country": null, "work_location": "ABU DHABI", "vintage_days": null, "vintage_updated_date": null, "designation_by_doc_collection": 5, "job_function": 2, "job_function_name": null, "offline_status": 1, "emp_name": "Emerson Z.Lucero", "emp_check_payout_status": null, "mismatch_key": null, "payout_location_status": null, "payout_bank_status": null, "payout_bank": null, "recruiter": 59, "recruiter_name": null, "document_id_status": null, "payout_update_status": null, "update_comment": null, "job_opening_id": 12, "doj": "2023-12-26", "target": null, "product": null, "pre_offline_status": null, "range_id": null, "export_name": null },
    { "id": 1807, "emp_id": 101835, "company_id": null, "dept_id": 36, "onboarding_status": 1, "first_name": "FARHAN", "middle_name": null, "last_name": "AHAMED", "document_collection_id": 1251, "interview_id": 4196, "created_at": "2023-12-26T06:11:33.000000Z", "updated_at": "2023-12-26T06:11:33.000000Z", "status": 1, "source_code": null, "basic_salary": null, "others_mol": null, "gross_mol": null, "actual_salary": null, "job_role": "Relationship Officer- Cards", "function_name": null, "employee_status": null, "location": null, "tl_id": null, "tl_name": null, "country": null, "work_location": "DUBAI", "vintage_days": null, "vintage_updated_date": null, "designation_by_doc_collection": 10, "job_function": 2, "job_function_name": null, "offline_status": 1, "emp_name": "FARHAN AHAMED MOHD ALI SHAIKH", "emp_check_payout_status": null, "mismatch_key": null, "payout_location_status": null, "payout_bank_status": null, "payout_bank": null, "recruiter": 35, "recruiter_name": null, "document_id_status": null, "payout_update_status": null, "update_comment": null, "job_opening_id": 9, "doj": "2023-12-26", "target": null, "product": null, "pre_offline_status": null, "range_id": null, "export_name": null },
    { "id": 1806, "emp_id": 101810, "company_id": null, "dept_id": 46, "onboarding_status": 1, "first_name": "Sheikh", "middle_name": null, "last_name": "Fahad", "document_collection_id": 1198, "interview_id": 3919, "created_at": "2023-12-25T10:27:48.000000Z", "updated_at": "2023-12-25T11:40:17.000000Z", "status": 1, "source_code": null, "basic_salary": null, "others_mol": null, "gross_mol": null, "actual_salary": null, "job_role": "Relationship Officer- Cards", "function_name": null, "employee_status": null, "location": null, "tl_id": "1490", "tl_name": null, "country": null, "work_location": "DUBAI", "vintage_days": null, "vintage_updated_date": null, "designation_by_doc_collection": 43, "job_function": 2, "job_function_name": null, "offline_status": 1, "emp_name": "Sheikh Fahad Ali", "emp_check_payout_status": null, "mismatch_key": null, "payout_location_status": null, "payout_bank_status": null, "payout_bank": null, "recruiter": 16, "recruiter_name": null, "document_id_status": null, "payout_update_status": null, "update_comment": null, "job_opening_id": 32, "doj": "2023-12-25", "target": null, "product": null, "pre_offline_status": null, "range_id": null, "export_name": null },
]
const Home = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    return (
        <div>
            <Container>

                <div>
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
                </div>
                <Grid container spacing={2}>
                    {
                        userdetails.map((item, i) => {
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
            </Container>
        </div>
    )
}

export default Home;


