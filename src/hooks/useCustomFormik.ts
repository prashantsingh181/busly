import { type FormikConfig, type FormikValues, useFormik } from "formik";
import { useEffect } from "react";

export default function useCustomFormik<
  Values extends FormikValues = FormikValues
>(config: FormikConfig<Values>) {
  const form = useFormik(config);

  // logic to scroll to first error
  useEffect(() => {
    if (form.submitCount > 0 && Object.keys(form.errors).length > 0) {
      for (const key in form.errors) {
        const element = document.querySelector(`[data-name="error-${key}"]`);
        if (element && element instanceof HTMLElement) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          return;
        } else {
          continue;
        }
      }
    }
  }, [form.submitCount]);

  return form;
}
