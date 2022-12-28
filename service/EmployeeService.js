import Employee from "../model/Employee.js";
import User from "../model/User.js";
import GenericService from "./generic/GenericService.js";
import bcrypt from "bcrypt";
class EmployeeService extends GenericService {
  constructor() {
    console.log("added new class");
    super(Employee);
    this.get = this.get.bind(this);
    this.register = this.register.bind(this);
  }
  async get() {
    const employees = await Employee.findAll({
      include: {
        model: User,
      },
    });
    return employees;
  }
  async register(data) {
    const { first_name, last_name, email, phoneNumber, username, password } =
      data;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const newEmployee = await Employee.create({
      firstName: first_name,
      lastName: last_name,
      email: email,
      phoneNumber: phoneNumber,
    });
    const newUser = await User.create({
      username: username,
      password: hashPassword,
      isEnabled: true,
      isAccountLocked: false,
      employeeId: newEmployee.id,
    });
    return data;
  }

  async update(id, data) {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      hire_date,
      salary,
      comission_pct,
    } = data;
    const newEmployee = await Employee.update(
      {
        firstName: first_name,
        lastName: last_name,
        email: email,
        hireDate: hire_date,
        salary: salary,
        phoneNumber: phone_number,
        comissionPct: comission_pct,
      },
      {
        where: {
          id: id,
        },
      }
    );
    const respon = await Employee.findOne({
      where: {
        id: id,
      },
    });
    return respon;
  }
}

export { EmployeeService };
