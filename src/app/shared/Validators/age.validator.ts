import { AbstractControl, ValidationErrors } from "@angular/forms";


export function ageValidator (control: AbstractControl): ValidationErrors | null {

    if (control.value) {

        const birthdate = new Date(control.value);
        // const now = new Date();

        const ageMilliseconds = Date.now() - birthdate.getTime();
        const ageYears = ageMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

        if (ageYears < 18) return { message: "Trop jeune, trop tôt !" };



        return null;

    }

    return { message: "Champ obligatoire" };
}