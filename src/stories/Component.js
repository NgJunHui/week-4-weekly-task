import React from "react";
import './component.css';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import { AiFillYoutube, AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'

export const Input = ({ id, variant, value, helperText, type, label, name, placeholder, error, onChange }) => {
    return (
        <TextField

            type={type}
            id={id}
            label={label}
            variant={variant}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            helperText={helperText}
            error={error}
        />
    )
}

export const CardComponent = ({ alt, image,text, title }) => {
    return (
        <Card sx={{ width: 400, height:320}}>
            <CardMedia
                component="img"
                alt={alt}
                image={image}
                sx={{height:'200px'}}
            />
            <CardContent>
                <Typography gutterBottom textAlign={'center'} variant="h5" component="div" sx={{fontWeight:700}}>
                    {title}
                </Typography>
                <Typography variant="h6" color="text.secondary" textAlign={'center'}>
                   {text}
                </Typography>
            </CardContent>
        </Card>
    )
}


export const Navbar = () => {
    return (

        <nav>
            <div className="nav-div">
                <ul className="nav-ul">
                    <li><Link to='/home' className="nav-links">Dashboard</Link></li>
                    <li><Link to='/players' className="nav-links">Players</Link></li>
                    <li><Link to='/score' className="nav-links">Score</Link></li>
                    <li><Link to='/about' className="nav-links">About</Link></li>
                    <li><Link to='/contact' className="nav-links">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export const Footer = ({ backgroundColor, ...props }) => {

    return (
        <footer
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            <div className="footer-content">
                <ul className="socials">
                    <li><a href="#"><AiFillLinkedin /></a></li>
                    <li><a href="#"><AiFillFacebook /></a></li>
                    <li><a href="#"><AiFillYoutube /></a></li>
                    <li><a href="#"><AiFillTwitterSquare /></a></li>
                    <li><a href="#"><AiFillInstagram /></a></li>
                </ul>
                <div className="footer-bottom">
                    <p>Copyright &copy;2022 JH. Designed by <span>Jun Hui</span></p>
                </div>
            </div>
        </footer>
    )
}


Footer.propTypes = {
    backgroundColor: PropTypes.string,
}

Footer.defaultProps = {
    backgroundColor: null,
}
