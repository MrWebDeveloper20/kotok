import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'hadi',
      family: 'hosaini',
      melliCode: '0123456789',
      mobile: '09123456789',
      email: 'hadi@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'ali',
      family: 'rezaei',
      melliCode: '0000000000',
      mobile: '09120000000',
      email: 'ali@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],  
}

export default data