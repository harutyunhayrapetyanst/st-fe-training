import {
    Banner,
    BodyText,
    Button,
    Eyebrow,
    Form,
    Headline,
    Page,
    Stack,
} from '@servicetitan/design-system';
import { provide, useDependencies } from '@servicetitan/react-ioc';
import { StFormStore } from '../stores/st-form.store';
import { observer } from 'mobx-react';

import * as Style from '../styles/styles.module.less';
import { Genders } from '../enums/genders';

export const StForm = provide({ singletons: [StFormStore] })(
    observer(() => {
        const [store] = useDependencies<[StFormStore]>(StFormStore);

        const {
            validate,
            submit,
            isSubmitButtonDisabled,
            formState,
            forError,
            resetToCurrentValue,
            reset,
        } = store;

        const { emailFiendState, nameFieldSate, genderFieldState } = formState.$;
        return (
            <Page header={<Headline>Form</Headline>} className={Style.formPage}>
                <Stack spacing={1} direction="column" className="m-y-2">
                    <Stack.Item>
                        <Eyebrow>Value</Eyebrow>
                        <BodyText>{emailFiendState.value}</BodyText>

                        <Eyebrow>Validated Value</Eyebrow>
                        <BodyText>{emailFiendState.$}</BodyText>
                    </Stack.Item>
                </Stack>

                {forError && <Banner title="error">{forError}</Banner>}

                <Form className={Style.stForm}>
                    <Form.Input
                        label="Name"
                        value={nameFieldSate.value}
                        error={nameFieldSate.error}
                        onChange={nameFieldSate.onChangeHandler}
                    />

                    <Form.Input
                        label="email"
                        value={emailFiendState.value}
                        error={emailFiendState.error}
                        onChange={emailFiendState.onChangeHandler}
                    />

                    <Form.Group>
                        <Form.Radio
                            label="Male"
                            value={Genders.Male}
                            onChange={genderFieldState.onChange}
                            checked={genderFieldState.value === Genders.Male}
                        />
                        <Form.Radio
                            label="Female"
                            value={Genders.Female}
                            onChange={genderFieldState.onChange}
                            checked={genderFieldState.value === Genders.Female}
                        />
                        <Form.Radio
                            label="Other"
                            value={Genders.Other}
                            onChange={genderFieldState.onChange}
                            checked={genderFieldState.value === Genders.Other}
                        />
                    </Form.Group>
                </Form>

                <Button onClick={resetToCurrentValue}>ResetToCurrentValue</Button>
                <Button onClick={reset}>Reset</Button>
                <Button onClick={validate}>Validate</Button>
                <Button primary onClick={submit} disabled={isSubmitButtonDisabled}>
                    Submit
                </Button>
            </Page>
        );
    })
);
