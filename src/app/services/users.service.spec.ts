import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: UsersService;
  let Users = [
    {
      image: '',
      name: 'Ms Giliane Ribeiro',
      gender: 'female',
      location: 'BR, Brazil',
      email: 'giliane.ribeiro@example.com',
      current_age: 14,
      registration_seniority: 'Jul/12/2008',
      phone_number: '(16) 8248-5650'
    },
    {
      image: '',
      name: 'Mr Ronnie Taylor',
      gender: 'male',
      location: 'GB, United Kingdom',
      email: 'ronnie.taylor@example.com',
      current_age: 10,
      registration_seniority: 'Jan/15/2012',
      phone_number: '019467 79886'
    },
    {
      image: '',
      name: 'Mr Carter Barnaby',
      gender: 'fmale',
      location: 'CA, Canada',
      email: 'carter.barnaby@example.com',
      current_age: 12,
      registration_seniority: 'Jan/17/2010',
      phone_number: 'G81 M32-7367'
    }
  ]

    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new UsersService(httpClientSpy);

    })

    describe('getPosts()', () => {
      it('should return expected users when getUsers is called', () => {
        httpClientSpy.get.and.returnValue(of(Users));
        service.getUsers().subscribe({
          next: users => {
            expect(users).toEqual(Users);
          },
          error: () => {},
        });
        expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
      });
    });
});
