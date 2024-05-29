import { Button, Form, Headline, Page } from '@servicetitan/design-system';
import { provide, useDependencies } from '@servicetitan/react-ioc';
import { StFormStore } from '../stores/st-form.store';
import { observer } from 'mobx-react';

export const StForm = provide({ singletons: [StFormStore] })(
    observer(() => {
        const [store] = useDependencies<[StFormStore]>(StFormStore);

        const onChange = (e: any) => {
            store.emailFieldState.onChange(e.target.value);
        };

        const onSubmit = () => {
            store.onSubmit();
        };

        return (
            <Page header={<Headline>Form</Headline>}>
                <Form>
                    <Form.Input
                        label="Email"
                        error={store.emailFieldState.error}
                        value={store.emailFieldState.value}
                        onChange={onChange}
                    />

                    <Button primary onClick={onSubmit} disabled={store.isFormValid}>
                        Submit
                    </Button>
                </Form>
            </Page>
        );
    })
);
