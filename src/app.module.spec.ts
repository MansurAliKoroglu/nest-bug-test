import { Module } from '@nestjs/common';

// import { AppModule } from './app.module';

jest.mock('@nestjs/common');

describe('', () => {
  test('', () => {
    // When there is this, I got that error.
    const mockedModule = jest.mocked(Module);

    // This also causing the same error
    // new AppModule();

    // This does not cause
    // console.log('something')
  });
});
