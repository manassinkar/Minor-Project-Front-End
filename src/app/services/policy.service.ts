import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient) { }

  addPolicy(policyName: string, companyName: string, coverInL: Number, cashlessHospitals: Number, premiumMonthly: Number, premiumYearly: Number)
  {
    return this.http.post<any>(`http://localhost:3000/policy/addPolicy`,{ policyName,companyName,coverInL,cashlessHospitals,premiumMonthly,premiumYearly }).pipe(map(policy =>
      {
        return policy;
      }));
  }
}
