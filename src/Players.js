import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onGetData } from './actions';
import { Card, CardContent, Typography, Box, Link} from '@mui/material'

class Players extends Component {
    componentDidMount = () => {
        this.props.onGetPosts();
    }
    render() {
        return (
            <React.Fragment>
                <Typography variant='h4'
                    fontWeight='600'
                    sx={{ textAlign: 'center', mt:5 }}>
                    Popular Players
                </Typography>
                <Box display='flex'
                    justifyContent="center"
                    alignItems="center" flexWrap='wrap' sx={{ gap: 4, mt: 4, mb: 20 }}>

                    {this.props.posts.length ? (this.props.posts.map(info => {
                        return (
                            <React.Fragment>
                                <Card sx={{ width: 350 }}>
                                    <CardContent>
                                        <Typography textAlign="center" gutterBottom variant="h5" component="div">
                                            {info.id}. {info.name}
                                        </Typography>
                                        <Typography textAlign="center" variant="body1" color="text.secondary">
                                            Email: {info.email}
                                        </Typography>
                                        <Typography textAlign="center" variant="body1" color="text.secondary">
                                            Phone: {info.phone}
                                        </Typography>
                                        <Typography textAlign="center" variant="body1" color="text.secondary">
                                            Website: <Link>{info.website}</Link>
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </React.Fragment>

                        )
                    })) : ('')}
                </Box>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetPosts: () => dispatch(onGetData())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players);