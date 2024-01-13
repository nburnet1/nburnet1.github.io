import {Card, CardActions, CardContent, CardMedia, Chip, Container, Paper, TextField, Typography} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import {ViewKanbanRounded} from "@mui/icons-material";
import {useForm, ValidationError} from "@formspree/react";
import Button from "@mui/material/Button";

function Contact() {
    function ContactForm() {
        const [state, handleSubmit] = useForm("xknlezvd");

        if (state.succeeded) {
            return (
                <Card>
                    <CardContent>
                        <Typography variant="h6" align="center">
                            Thank you! I'll be in touch soon.
                        </Typography>
                    </CardContent>
                </Card>

            );
        }

        return (
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Contact Form
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Full Name"
                            variant="outlined"
                            id="full-name"
                            type="text"
                            name="name"
                            size="small"
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            id="email"
                            type="email"
                            name="email"
                            size="small"
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}

                        />
                        <TextField
                            label="Phone Number (Optional)"
                            variant="outlined"
                            type="telephone"
                            name="telephone"
                            id="telephone"
                            size="small"
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}

                        />
                        <TextField
                            id="message"
                            name="message"
                            label="Message"
                            multiline
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 2 }}
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}

                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={state.submitting}
                        >
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        );
    }
    return (
        <>
            <Paper elevation={0} sx={{height: "100%", padding:"20px 0"}}>
            <Container maxWidth="md" sx={{

                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Card  sx={{maxWidth: 400}} variant={"outlined"}>
                    <div className={"contact-img-div"}>
                        <CardMedia
                            className={"contact-img"}
                            sx={{height: 250, width: 250}}
                            image="../me.jpg"
                            title="me"
                        />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Noah Burnette
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Feel free to reach out to me on any of the following platforms or use the contact form below!
                        </Typography>
                    </CardContent>
                    <CardActions>

                        <Chip
                            className={"contact-chip"}
                            size={"small"}
                            icon={<GitHubIcon/>}
                            label="Github"
                            component={"a"}
                            href="https://github.com/nburnet1"
                            variant={"outlined"}
                            clickable
                            sx={{color:"text.primary"}}
                        />
                        <Chip
                            className={"contact-chip"}
                            size={"small"}
                            icon={<LinkedInIcon/>}
                            label="LinkedIn"
                            component="a"
                            href="https://www.linkedin.com/in/nburnet1/"
                            variant={"outlined"}
                            clickable
                            sx={{color:"text.primary"}}
                        />
                        <Chip
                            className={"contact-chip"}
                            size={"small"}
                            icon={<EmailIcon/>}
                            label="Email"
                            component="a"
                            href="mailto:fmy6wb5b@duck.com"
                            variant={"outlined"}
                            clickable
                            sx={{color:"text.primary"}}
                        />
                        <Chip
                            className={"contact-chip"}
                            size={"small"}
                            icon={<ViewKanbanRounded/>}
                            label="Bitbucket"
                            component="a"
                            href={"https://bitbucket.org/nburnet1"}
                            variant={"outlined"}
                            clickable
                            sx={{color:"text.primary"}}
                        />
                    </CardActions>
                     <ContactForm />
                </Card>
            </Container>
            </Paper>
        </>
    );
}

export default Contact;