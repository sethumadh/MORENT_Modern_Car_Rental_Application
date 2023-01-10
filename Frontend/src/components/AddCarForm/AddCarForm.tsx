
import { useState } from 'react';

import { Formik, Field, Form, FormikHelpers } from 'formik';
import Dropzone from "react-dropzone";

import { Button, DocumentIconElement, FieldGroup, FormWrapper, InputGroup, StyledUpload, UploadResponseGroup, UploadResponseRow } from './styles';
import { CustomProgressBar } from '../../assets';
import { DocumentIcon, UploadIcon } from '../../assets/icon';


interface Values {
    firstName: string;
    lastName: string;
    email: string;
}
const AddCarForm = () => {
    const [files, setFiles] = useState([]);
    const [aviExp, setAviExp] = useState({});

    const handleDrop = (acceptedFiles: any) =>
        setFiles(
            acceptedFiles.map((file: any) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        );
    return (
        <FormWrapper>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form>

                    <h2>Add a Car for Rent</h2>
                    <h3>Please enter your car info</h3>

                    <FieldGroup>
                        <InputGroup>
                            <label htmlFor="carTitle">Car Title</label>
                            <Field id="carTitle" name="carTitle" placeholder="Your Title" />
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="carBrand">Car Brand</label>
                            <Field id="carBrand" name="carBrand" placeholder="Brand Name" />
                        </InputGroup>
                    </FieldGroup>

                    <FieldGroup>
                        <InputGroup>
                            <label htmlFor="carRentPrice">Rent Price</label>
                            <Field id="carRentPrice" name="carRentPrice" placeholder="Price in dollars" />
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="carCapacity">Capacity</label>
                            <Field id="carCapacity" name="carCapacity" placeholder="Capacity in persons" />
                        </InputGroup>
                    </FieldGroup>

                    <FieldGroup>
                        <InputGroup>
                            <label htmlFor="carType">Car Type</label>
                            <Field id="carType" name="carType" placeholder="Car Type" />
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="carLocation">Location</label>
                            <Field id="carLocation" name="carLocation" placeholder="Select your city" />
                        </InputGroup>
                    </FieldGroup>

                    <FieldGroup>
                        <InputGroup>

                            <label htmlFor="uploadImages">Upload Images</label>
                            <Dropzone onDrop={handleDrop} maxFiles={1}>
                                {({
                                    getRootProps,
                                    getInputProps,
                                    isDragActive,
                                    isDragAccept,
                                    isDragReject
                                }) => {
                                    return (
                                        <StyledUpload
                                            {...getRootProps({
                                                isDragActive,
                                                isDragAccept,
                                                isDragReject
                                            })}
                                        >
                                            <input {...getInputProps()} />
                                            <span>{isDragActive ? <DocumentIconElement src={UploadIcon} /> : <DocumentIconElement src={UploadIcon} />}</span>
                                            <p>
                                                Drag and drop an image, or Browse
                                            </p>
                                            <em>High resolution images (png, jpg, gif)</em>
                                        </StyledUpload>
                                    );
                                }}
                            </Dropzone>
                        </InputGroup>
                    </FieldGroup>

                    <FieldGroup>
                        <UploadResponseGroup>
                            <UploadResponseRow>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <DocumentIconElement src={DocumentIcon} />
                                    <label htmlFor="carDescription">car_front.jpg</label>
                                </div>
                                <span style={{}}>2.5 MB of 5.1 MB</span>
                            </UploadResponseRow>
                            <UploadResponseRow style={{ position: "absolute", bottom: "0" }}>
                                <CustomProgressBar />
                            </UploadResponseRow>
                        </UploadResponseGroup>
                    </FieldGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </Formik>
        </FormWrapper>
    )
}

export default AddCarForm