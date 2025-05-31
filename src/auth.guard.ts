import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  let subject = localStorage.getItem("subject");
  if(subject == "secretary")
    return true;
  return false;
};
