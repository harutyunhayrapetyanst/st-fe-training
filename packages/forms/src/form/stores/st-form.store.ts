import { injectable } from '@servicetitan/react-ioc';
import { FieldState } from 'formstate';
import { FormValidators } from '@servicetitan/form-state';
import { computed } from 'mobx';

@injectable()
export class StFormStore {
    emailFieldState: FieldState<string> = new FieldState<string>('').validators(value => {
        if (!FormValidators.emailFormatIsValid(value)) {
            return 'Wrong Email';
        }
        return undefined;
    });

    constructor() {
        this.emailFieldState.disableAutoValidation();
    }

    onSubmit = () => {
        this.emailFieldState.validate();
    };

    @computed
    get isFormValid() {
        return this.emailFieldState.hasError;
    }
}
