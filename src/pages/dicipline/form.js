// ** React Imports
import { useRef, useState } from "react";


// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

import { Form } from "@unform/web";

import { styled, useTheme } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox'

import MuiFormControlLabel from '@mui/material/FormControlLabel'
const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
    '& .MuiFormControlLabel-label': {
        fontSize: '0.875rem',
        color: theme.palette.text.secondary
    }
}))

const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        borderRight: `1px solid ${theme.palette.divider}`
    }
}))
const LinkStyled = styled('a')(({ theme }) => ({
	textDecoration: 'none',
	color: 'white'
}))
const FormLayoutsBasic = () => {
    const formRef = useRef();

    // ** States
    const [values, setValues] = useState({
        password: '',
        showPassword: false
    })

    const [confirmPassValues, setConfirmPassValues] = useState({
        password: '',
        showPassword: false
    })

    const handleSubmit = prop => event => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleConfirmPassChange = prop => event => {
        setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value })
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleClickConfirmPassShow = () => {
        setConfirmPassValues({ ...confirmPassValues, showPassword: !confirmPassValues.showPassword })
    }

    const handleMouseDownPassword = event => {
        event.preventDefault()
    }

    return (

						<Card>
							<CardContent>
								<form onSubmit={e => e.preventDefault()}>
									<Grid container spacing={5}>
										<Grid item xs={12}>
											<TextField
												fullWidth
												size='small'
												sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
												InputProps={{
													startAdornment: (
														<InputAdornment position='start'>
															<Magnify fontSize='small' />
														</InputAdornment>
													)
												}}
											/>
										</Grid>

										<Grid item xs={12} sm={12}>
											<CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
												<Form ref={formRef} onSubmit={handleSubmit}>
													<Grid container spacing={12}>
														<Grid item xs={12} sm={6}>
															<StyledBox>
																<Box sx={{ display: 'flex', alignItems: 'center' }}>
																	<FormControlLabel control={<Checkbox />} label='Certified Occupational Therapist Assistant' />
																</Box>
																<Box sx={{ display: 'flex', alignItems: 'center' }}>
																	<FormControlLabel control={<Checkbox />} label='Speech-Language Pathologist' />
																</Box>
																<Box sx={{ display: 'flex', alignItems: 'center' }}>
																	<FormControlLabel control={<Checkbox />} label='Speech-Language Pathologist Assistant' />
																</Box>
																<Box sx={{ display: 'flex', alignItems: 'center' }}>
																	<FormControlLabel control={<Checkbox />} label='Audiologist' />
																</Box>													
															</StyledBox>
														</Grid>

														<Grid item xs={12} sm={6}>
															<Box sx={{ display: 'flex', alignItems: 'center' }}>
																<FormControlLabel control={<Checkbox />} label='Physical Therapist Assistant' />
															</Box>
															<Box sx={{ display: 'flex', alignItems: 'center' }}>
																<FormControlLabel control={<Checkbox />} label='Respiratory Therapist' />
															</Box>
															<Box sx={{ display: 'flex', alignItems: 'center' }}>
																<FormControlLabel control={<Checkbox />} label='Occupational Therapist' />
															</Box>
															<Box sx={{ display: 'flex', alignItems: 'center' }}>
																<FormControlLabel control={<Checkbox />} label='Physical Therapist' />
															</Box>
														</Grid>
													</Grid>
												</Form>
											</CardContent>
										</Grid>

										<Grid item xs={12}>
											<Box
												sx={{
												gap: 5,
												display: 'flex',
												flexWrap: 'wrap',
												alignItems: 'center',
												justifyContent: 'space-between'
												}}
											>

											<Box sx={{ display: 'flex', alignItems: 'right' }}>
												<Button variant='contained' size='large' href='/job_status/'>
													<LinkStyled>Prev</LinkStyled>
												</Button>
											</Box>
											
											<Box sx={{ display: 'flex', alignItems: 'right' }}>
												<Button variant='contained' size='large' href='/candidate-register/'>
													<LinkStyled>Next</LinkStyled>
												</Button>
												</Box>
											</Box>
											
										</Grid>
									</Grid>
								</form>
							</CardContent>
						</Card>
						)
						}

						export default FormLayoutsBasic
