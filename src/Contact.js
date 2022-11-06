import React from 'react'
import { CardComponent } from './stories/Component'
import { Box } from '@mui/material'
const Contact = () => {
    return (
        <>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ m: '150px auto 0 auto',gap:7}}>

                <CardComponent
                    image="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                    title="ADDRESS"
                    text="85 Peachtree Drive
                    Ridge, NY 11385 " />

                <CardComponent
                    image="https://wallpapersmug.com/download/1600x900/1b72a1/basketball-sports-court-.jpg"
                    title="PHONE NUMBER"
                    text="234-9876-5400" />

                <CardComponent
                    image="https://images.wallpaperscraft.com/image/single/basketball_ball_basketball_net_190858_2560x1440.jpg"
                    title="E-MAIL"
                    text="basketball@gmail.com" />
            </Box>
        </>
    )
}

export default Contact