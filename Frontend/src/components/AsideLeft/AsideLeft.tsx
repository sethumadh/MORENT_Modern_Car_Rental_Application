import { ChangeEvent, useState } from 'react';

import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { Formik, Form } from "formik";

import { Container, LeftSide, Label, FilterSection } from './styles'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const AsideLeft = () => {
    const [state, setState] = useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };
    function valueLabelFormat(value: number) {
        return `${value}`;
    }

    function calculateValue(value: number) {
        return value;
    }

    const [value, setValue] = useState<number>(80);

    const handlePriceChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    return (
        <Container>
            <LeftSide>
                <h3>SEARCH</h3>
                <div>

                    <Formik
                        initialValues={{
                            toggle: false,
                            checked: [],
                        }}
                        onSubmit={async (values) => {
                            await sleep(500);
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        {({ values }) => (
                            <FilterSection>

                                <Form>
                                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                        <h3>TYPE</h3>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={true} onChange={handleChange} name="sport" />
                                                }
                                                label="Sport (10)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="SUV" />
                                                }
                                                label="SUV (12)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="MPV" />
                                                }
                                                label="MPV (16)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="Sedan" />
                                                }
                                                label="Sedan (20)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="Coupe" />
                                                }
                                                label="Coupe (14)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="Hatchback" />
                                                }
                                                label="Hatchback (14)"
                                            />
                                        </FormGroup>

                                        <h3>CAPACITY</h3>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={true} onChange={handleChange} name="person" />
                                                }
                                                label="2 Person (10)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="person" />
                                                }
                                                label="4 Person (14)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="person" />
                                                }
                                                label="6 Person (12)"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={false} onChange={handleChange} name="person" />
                                                }
                                                label="8 or More (16)"
                                            />
                                        </FormGroup>

                                        <h3>PRICE</h3>
                                        <FormGroup>
                                            <Slider
                                                value={value}
                                                min={5}
                                                step={1}
                                                max={100}
                                                scale={calculateValue}
                                                getAriaValueText={valueLabelFormat}
                                                valueLabelFormat={valueLabelFormat}
                                                onChange={handlePriceChange}
                                                valueLabelDisplay="auto"
                                                aria-labelledby="non-linear-slider"
                                            />
                                            <Typography id="non-linear-slider" gutterBottom>
                                                Max. $: {(calculateValue(value))}
                                            </Typography>
                                        </FormGroup>
                                    </FormControl>
                                </Form>
                            </FilterSection>
                        )}
                    </Formik>
                </div>
            </LeftSide>
        </Container>
    )
}

export default AsideLeft