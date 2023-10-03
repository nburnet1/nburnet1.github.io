import React, {useEffect, useState} from 'react';
import {Card, CardContent, Container, Link, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;

}
function FOSS(){
    const [starredRepos, setStarredRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Function to fetch starred repositories
        const fetchStarredRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/nburnet1/starred');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStarredRepos(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        // Call the fetch function when the component mounts
        fetchStarredRepos();
    }, []);
    return (
        <Container maxWidth="md" sx={{padding: '32px 10px 96px 10px'}}>
            <Grid sx={{paddingBottom: '10px'}}>
                <Typography variant="h5"><center>Great <Link component={Link} color={"inherit"} href={"https://opensource.org/osd/"}>Open Source</Link> Software/Projects.</center></Typography>
                <Divider/>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <Grid item sx={{padding: "10px 0"}}>
                        {starredRepos.map((repo:Repo) => (
                            <Card sx={{padding: "5px"}}>
                            <CardContent>
                                <Typography variant="h6"><Link component={Link} color={"inherit"} href={repo.html_url}>{repo.name}</Link></Typography>
                               <i>{repo.description === null ? "Description not provided" : <>{repo.description}</>}</i>
                            </CardContent>
                            </Card>
                        ))}
                    </Grid>
                )}

            </Grid>

        </Container>
    )
}

export default FOSS;