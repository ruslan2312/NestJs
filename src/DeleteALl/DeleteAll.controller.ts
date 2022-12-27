import { Controller, Delete, HttpCode } from '@nestjs/common';
import { BlogsService } from '../blogs/blogs.service';
import { UsersRepository } from '../users/users.repository';
import { BlogsRepository } from '../blogs/blogs.repository';

@Controller('testing/all-data')
export class DeleteAllController {
    constructor(
        protected usersRepository: UsersRepository,
        protected blogsRepository: BlogsRepository,
    ) {}

    @Delete()
    @HttpCode(204)
    async deleteAllUsers() {
        await this.usersRepository.deleteAllUsers();
        await this.blogsRepository.deleteAllBlogs();
    }
}
