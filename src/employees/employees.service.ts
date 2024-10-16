import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createEmployee: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployee,
    });
  }

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role)
      return this.databaseService.employee.findMany({ where: { role } });
    return this.databaseService.employee.findMany();
  }

  findOne(id: number) {
    return this.databaseService.employee.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id: id,
      },
      data: updateEmployeeDto,
    });
  }
  remove(id: number) {
    return this.databaseService.employee.delete({
      where: {
        id: id,
      },
    });
  }
}
