import { AbstractControl, ValidationErrors } from "@angular/forms";


export function twoPasswordCheckValidator (control: AbstractControl): ValidationErrors | null {

    if (control.value.password && control.value.confirmPassword) {

        if (control.value.password !== control.value.confirmPassword) {
            return { message: "Mots de passe sont différents." };
        }

        return null;

    }

    else {
        return { message: "Champs obligatoires." };
    }

}