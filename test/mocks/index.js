module.exports = {
  flat: {
    qs:
      '?first_name=John&LastName=Doe&date-of_-birth=01.01.1985&hair.color=brown',
    expected: {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '01.01.1985',
      hairColor: 'brown',
    },
  },
  nested: {
    qs:
      '?first_name=John&LastName=Doe&date-of_-birth=01.01.1985&hair.color=brown&contact[phone_number]=754-3010&contact[email]=john.doe@example.com',
    expected: {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '01.01.1985',
      hairColor: 'brown',
      contact: {
        phoneNumber: '754-3010',
        email: 'john.doe@example.com',
      },
    },
  },
}
