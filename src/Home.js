import React, { Component } from 'react';
import { Input } from './stories/Component';
import { Button } from './stories/Button';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { onAddData } from './actions';
import { Box, Typography } from '@mui/material'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      score: '',
      validSuccess: false,
      nameErr: '',
      scoreErr: '',
      isNameErr: false,
      isScoreErr: false,
    };
  }

  handleChange = (e) => {
    if (e.target.id == 'name') {
      this.nameValidate(e.target.value);
    }
    if (e.target.id == 'score') {
      this.scoreValidate(e.target.value);
    }
  }

  nameValidate = (name) => {
    let nameErr = this.state.nameErr;
    let validSuccess = this.state.validSuccess;
    let isNameErr = this.state.isNameErr;
    if (name.trim() === '') {
      nameErr = "*Field is required."
      validSuccess = false;
      isNameErr = true;
    }
    else if (!/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/.test(name)) {
      nameErr = '*Only letters, numbers, _ and - are allowed.'
      validSuccess = false;
      isNameErr = true;
    }
    else if (name.trim().length <= 3) {
      nameErr = '*Name should be more than 3 characters.'
      validSuccess = false;
      isNameErr = true;
    }
    else {
      nameErr = '';
      validSuccess = true;
      isNameErr = false;
    }

    this.setState({
      name,
      nameErr,
      validSuccess,
      isNameErr
    });

    return validSuccess;
  }

  scoreValidate = (score) => {
    let scoreErr = this.state.scoreErr;
    let validSuccess = this.state.validSuccess;
    let isScoreErr = this.state.isScoreErr;

    if (score.trim() === '') {
      validSuccess = false;
      scoreErr = "*Field is required.";
      isScoreErr = true;

    }
    else if (!/^\d+$/.test(score)) {
      scoreErr = '*Only numbers are allowed'
      validSuccess = false;
      isScoreErr = true;
    }
    else {
      validSuccess = true;
      scoreErr = '';
      isScoreErr = false;
    }
    this.setState({
      score,
      scoreErr,
      validSuccess,
      isScoreErr
    });
    return validSuccess;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.nameValidate(this.state.name) &&
      this.scoreValidate(this.state.score)) {
      const unique_id = uuid().slice(0, 8);

      this.props.onAddItem({ ...this.state, id: unique_id });

      let name = '';
      let score = '';
      let nameErr = '';
      let scoreErr = '';

      this.setState({
        name: name,
        score: score,
        nameErr: nameErr,
        scoreErr: scoreErr
      });
      alert('Score Updated.')
    }
    else {
      alert("Please check all required fields.")
    }
  }

  render() {
    const { employee } = this.props;
    return (
      <>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h3"
            fontWeight='600'
            sx={{mt:10}}
          >Basketball Academy Score Update</Typography>

          <Box
            display='flex'
            flexDirection='column'
            justifyContent="center"
            alignItems="center"
            sx={{
              width: 1 / 5, boxShadow: 20,
              m: '50px auto 0 auto',
              p: '35px 30px',
              borderRadius: 3
            }}

          >

            <Input
              variant="outlined"
              label="Full Name"
              name="name"
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              helperText={this.state.nameErr}
              error={this.state.isNameErr}
            />
            <br />
            <Input
              variant="outlined"
              label="Score"
              name="score"
              type="text"
              id="score"
              value={this.state.score}
              onChange={this.handleChange}
              helperText={this.state.scoreErr}
              error={this.state.isScoreErr}

            />
            <Button label="Update"
              onClick={this.handleSubmit}

              style={{
                marginTop: '20px',
                padding: '15px 50px',
                color: '#B54213',
                border: '1px solid #B54213'
              }}
            />
          </Box>
        </Box>
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    employee: state.employee
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItem: (item) => dispatch(onAddData(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);