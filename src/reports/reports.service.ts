import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';
import { CreateReportDto } from './dtos/create-report.dto';
import { User } from 'src/users/user.entity';
import { ApproveReportDto } from './dtos/approve-report.dto';
@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}
  async create(reportDto: CreateReportDto, user: User) {
    const report = this.repo.create(reportDto);
    report.user = user;

    const c = await this.repo.save(report);
    return report;
  }

  async changeApproval(id: string, approved: boolean) {
    const report = await this.repo.findOne({
      where: {
        userId: id,
      },
    });
    if (!report) {
      throw new NotFoundException('Report not found');
    }
    report.approved = approved;
    return this.repo.save(report)
  }
}
