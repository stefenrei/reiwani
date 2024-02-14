import { Fragment, React, useState, useEffect } from 'react'
import { Card, Typography, Grid, Button, CardContent } from '@mui/material'
import AnimatedGif from '../AnimatedGif';


const Beige = () => {
    //STYLES
    const centeredStyle = { 
        display: 'flex',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "30%",
        textAlign: "center",
        padding: '5px',
        justifyContent: 'space-evenly'
    };
    const cardContentStyle = {
        display: 'flex'
    }
    //USESTATE
    const [step, setStep] = useState(0); //step changer
    //USEEFFECT
    useEffect(() => {   //initialize
        if (step !== 0) {
            setStep(0);
        }
    }, [])
    //FUNCTIONS
    const accept = () => {
        setStep(1)
    }
    const reject = () => {
        if (step === 0 || step === 1 || step === 8) {
            setStep(2)
        }
        if (step !== 0 && step !== 1 && step !== 8) {
            setStep(step + 1)
        }
    }
    const reset = () => {
        setStep(0)
    }
    const openInNewTab = (url) => {
        reset()
        window.open(url, "_blank", "noreferrer");
      };
    

    //COMPONENT
    return (
        <Fragment>
            <Card style={centeredStyle}>
                <CardContent style={cardContentStyle}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} lg={12} s={12} md={12}>
                            {step === 0 ? (
                                <>
                                    <AnimatedGif src="https://media.tenor.com/_klL57Jpi7cAAAAi/bongo-cat-heart.gif" alt="Cat Heart Gif" />
                                    <Typography>
                                        Will you be my valentines?
                                    </Typography>
                                </>
                            ) : step === 1 ? (
                                <>
                                    <AnimatedGif src="https://media1.tenor.com/m/UvjensFjB78AAAAd/cat-kiss.gif" alt="Cat Kiss Gif" />
                                    <Typography>
                                        Yay! Happy Valentines Baby! I love you so much!!!!!!!!!!!!!!!
                                    </Typography>
                                </>
                            ) : step === 2 ? (
                                <>
                                    <AnimatedGif src="https://media1.tenor.com/m/QUL6BSSHKswAAAAC/sassy-cat.gif" alt="Cat Sassy Gif" />
                                    <Typography>
                                        Are you sure?
                                    </Typography>
                                </>
                            ) : step === 3 ? (
                                <>
                                    <AnimatedGif src="https://media1.tenor.com/m/aZ1PR9DpnOYAAAAC/annoyed-disappointed.gif" alt="Cat Angry Gif" />
                                    <Typography>
                                        ARE YOU REALLY SURE????????????
                                    </Typography>
                                </>
                            ) : step === 4 ? (
                                <>
                                    <AnimatedGif src="https://media1.tenor.com/m/t7_iTN0iYekAAAAd/sad-sad-cat.gif" alt="Cat Sad Gif" />
                                    <Typography>
                                        PLEASE
                                    </Typography>
                                </>
                            ) : step === 5 ? (
                                <>
                                    <AnimatedGif src="https://media1.tenor.com/m/Px5xaaUbgT4AAAAd/hollyweencandy-sad-cat.gif" alt="Cat Sadder Gif" />
                                    <Typography>
                                        PLEASE PLEASE PLEASE
                                    </Typography>
                                </>
                            ) : step === 6 ? (
                                <>
                                    <AnimatedGif src="https://media1.tenor.com/m/o9owbF_iALAAAAAC/sad-cat.gif" alt="Cat Saddest Gif" />
                                    <Typography>
                                        PLEASE BE MY VALENTINES
                                    </Typography>
                                </>
                            ) : step === 7 ? (
                                <>
                                    <AnimatedGif src="https://media1.tenor.com/m/pFz1Q12_hXEAAAAd/cat-holding-head-cat.gif" alt="Cat CRY Gif" />
                                    <Typography>
                                        {":(((((("}
                                    </Typography>
                                </>
                            ) : (
                                <>
                                    <AnimatedGif src="https://media1.tenor.com/m/evOjo3SiS1sAAAAd/cat-blink.gif" alt="Cat CRY Gif" />
                                    <Typography>
                                        {"You have no escape now so please be my valentines :)"}
                                    </Typography>
                                </>
                            )
                            }
                        </Grid>
                        { step !== 8 && step !== 1 ?  (
                            <Fragment>
                            <Grid item xs={6} lg={6} s={6} md={6} >
                            <Button style={{
                                background: "green",
                                color: "white",
                                
                            }}
                                onClick={accept}
                            >
                                Yes
                            </Button>
                        </Grid>
                        <Grid item xs={6} lg={6} s={6} md={6} >
                            <Button style={{ background: "red", color: "white" }}
                                onClick={reject}>
                                No
                            </Button>
                        </Grid>
                        </Fragment>
                        ) : step === 1 ? ( 
                            <Fragment>
                            <Grid item xs={12} lg={12} s={12} md={12} >
                            <Button style={{
                                background: "green",
                                color: "white",
                                
                            }}
                                role="link"
                                onClick={() => openInNewTab("https://open.spotify.com/track/5kxOQDA9AcuNQXHvg5NpX4")}
                            >
                                Let me invite you again!
                            </Button>
                        </Grid>
                        </Fragment>
                        ) : (
                            <Fragment>
                            <Grid item xs={12} lg={12} s={12} md={12} >
                            <Button style={{
                                background: "green",
                                color: "white",
                            
                            }}
                                onClick={accept}
                            >
                                Yes
                            </Button>
                        </Grid>
                        </Fragment>
                        ) 
                        }
                        
                    </Grid>
                </CardContent>
            </Card>
        </Fragment >
    )
}
export default Beige;