import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator (control: AbstractControl): ValidationErrors | null {

    let error: ValidationErrors;

    if (control.value) {

        if (!/^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/.test(control.value)) {
            error = { message: "Votre email ne respecte pas le format d'un email."};
            return error;
        }

        if (control.value.length <= 5) {
            return { message: 'Votre email doit contenir au moins 6 caractères.' }
        }

        return null;

    }

    else {
        error = { message: "Champ obligatoire" }
        return error;
    }

}