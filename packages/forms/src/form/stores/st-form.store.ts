import { injectable } from '@servicetitan/react-ioc';
import { commitFormState, FormValidators, InputFieldState } from '@servicetitan/form-state';
import { computed, makeObservable } from 'mobx';
import { FieldState, FormState } from 'formstate';

@injectable()
export class StFormStore {
    formState = new FormState({
        emailFiendState: new InputFieldState('').validators(
            value => {
                if (!FormValidators.emailFormatIsValid(value)) {
                    return 'Email is not correct';
                }
                return undefined;
            },
            value => {
                return value.length < 10 ? 'length error' : undefined;
            }
        ),
        nameFieldSate: new InputFieldState('').validators(FormValidators.required),
        genderFieldState: new FieldState(undefined),

        another: new FormState({}),
    })
        .compose()
        .validators($ => {
            if ($.genderFieldState.$ === undefined) {
                return 'Gender is no set';
            }
        });

    constructor() {
        makeObservable(this);
    }

    @computed
    get forError() {
        return this.formState.error;
    }

    @computed
    get isSubmitButtonDisabled() {
        return this.formState.$.emailFiendState.hasError;
    }

    validate = () => {
        this.formState.$.emailFiendState.validate();
    };

    submit = async () => {
        await this.formState.validate();
    };

    resetToCurrentValue = () => {
        commitFormState(this.formState);
    };

    reset = () => {
        this.formState.$.emailFiendState.reset();
    };
}
