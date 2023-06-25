import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Regex from '../regex.entity';
import RegexValidator from '../regex.enum';
import RegexService from '../regex.service';

describe('RegexService', () => {
  let service: RegexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegexService,
        {
          provide: getRepositoryToken(Regex),
          useClass: Repository
        }
      ]
    }).compile();

    service = module.get<RegexService>(RegexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('regexValidation', () => {
    it('should throw error if name contains non-letter characters', () => {
      expect(() =>
        service.regexValidation(
          '123',
          'lastName',
          'Password123',
          'email@test.com',
          'Country',
          RegexValidator.SIGN_UP
        )
      ).toThrowError('The name can only contain letters');
    });

    it('should throw error if last name contains non-letter characters', () => {
      expect(() =>
        service.regexValidation(
          'Name',
          '123',
          'Password123',
          'email@test.com',
          'Country',
          RegexValidator.SIGN_UP
        )
      ).toThrowError('The last name can only contain letters');
    });

    it('should throw error if email is not in valid format', () => {
      expect(() =>
        service.regexValidation(
          'Name',
          'LastName',
          'Password123',
          'invalidEmail',
          'Country',
          RegexValidator.SIGN_UP
        )
      ).toThrowError('The e-mail format is invalid');
    });

    it('should throw error if password does not meet complexity requirements', () => {
      expect(() =>
        service.regexValidation(
          'Name',
          'LastName',
          'password',
          'email@test.com',
          'Country',
          RegexValidator.SIGN_UP
        )
      ).toThrowError(
        'The password must be at least 8 characters long, including a letter and a number'
      );
    });

    it('should throw error if country is empty', () => {
      expect(() =>
        service.regexValidation(
          'Name',
          'LastName',
          'Password123',
          'email@test.com',
          '',
          RegexValidator.SIGN_UP
        )
      ).toThrowError('The country cannot be empty');
    });

    it('should not throw any errors if all inputs are valid', () => {
      expect(() =>
        service.regexValidation(
          'Name',
          'LastName',
          'Password123',
          'email@test.com',
          'Country',
          RegexValidator.SIGN_UP
        )
      ).not.toThrow();
    });
  });
});
