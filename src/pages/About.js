import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box,Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
        <Box 
        sx={{
            my:15,
            textAlign:"center",
            p:3,
            "& h4":{
                fontWeight:"bold",
                my:2,
                fontSize:"2rem",
            },
            "& p":{
                textAlign:"justify",
            },
            "@media(max-width:600px)":{
                mt:0,
                "& h4":{
                    fontSize:"1.4rem",
                },
            },
        }}
        >
            <Typography variant='h4'>
                Welcome To My Restaurant
            </Typography>
            <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </Box>
    </Layout>
  )
}

export default About; 
