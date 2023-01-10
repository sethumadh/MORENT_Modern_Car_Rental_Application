import { Alert, AlertGroup, Button, FormWrapper, SecurityGroup, SecurityIconElement } from "./styles";
import { SecuritySafety } from '../../assets/icon';

import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const Confirmation = () => {
    return (
        <FormWrapper>
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
                    <Form>
                        <h2>Confirmation</h2>
                        <h3>
                            We are getting to the end. Just few clicks and your rental is
                            ready!
                        </h3>

                        <AlertGroup>
                            <Alert>
                                <label>
                                    <Field type="checkbox" name="toggle" />
                                    {/* {`${values.toggle}`} */}
                                </label>
                                <span>
                                    I agree with sending an Marketing and newsletter emails. No
                                    spam, promissed!
                                </span>
                            </Alert>
                            <Alert>
                                <label>
                                    <Field type="checkbox" name="toggle" />
                                    {/* {`${values.toggle}`} */}
                                </label>
                                <span>
                                    I agree with our terms and conditions and privacy policy.
                                </span>
                            </Alert>
                        </AlertGroup>
                        <Button type="submit">Submit</Button>
                        <SecurityGroup>
                            <SecurityIconElement src={SecuritySafety} />
                            <div>
                                <h2>All your data is safe</h2>
                                <h3>We are using the most advanced security to provide you the best experience ever.</h3>
                            </div>
                        </SecurityGroup>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    );
};

export default Confirmation;
