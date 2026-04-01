const { registerUser } = require('../src/services/userService');
const userRepository = require('../src/repositories/userRepository');

describe('Integration with Stubs', () => {
  test('should return a fake user when saved', async () => {
    // Implementing the Stub 
    userRepository.save = jest.fn().mockResolvedValue({
      id: 1,
      email: "test@test.com"
    });

    const result = await registerUser({ email: "test@test.com" });

    expect(result.id).toBe(1);
    expect(result.email).toBe("test@test.com");
  });
});

const emailService = require('../src/utils/emailService');
jest.mock('../src/utils/emailService'); 

describe(' Integration with Mocks', () => {
  test('should verify that the welcome email was sent', async () => {
    const userData = { email: "test@test.com" };
    
    await registerUser(userData); 

    // Verify behavior 
    expect(emailService.sendWelcomeEmail).toHaveBeenCalledWith(userData.email);
  });
});

const request = require('supertest'); 
const app = require('../src/app');

describe('Integration with Drivers (HTTP)', () => {
  test('POST /users should return 201 and user data', async () => {
    const response = await request(app) 
      .post('/users')
      .send({ email: 'driver@test.com' });

    expect(response.statusCode).toBe(201); 
    expect(response.body).toHaveProperty('id');
  });
});