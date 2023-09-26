import React from "react";
import {Container, IconButton, Link, Tooltip} from "@mui/material";
import {Download} from "@mui/icons-material";

function Resume() {
    return (
        <>
            <Container maxWidth="md" sx={{height: "90vh", padding: '32px 10px 112px 10px'}}>
                <embed src="../Noah_Burnette_Resume.pdf" type="application/pdf" width="100%" height="100%"/>
                <Tooltip title="Download Resume">
                    <IconButton>
                        <Link href={"../Noah_Burnette_Resume.pdf"} color={"inherit"} download>
                            <Download sx={{color: "text.primary"}}/>
                        </Link>
                    </IconButton>
                </Tooltip>
            </Container>
        </>
    );
}

export default Resume;