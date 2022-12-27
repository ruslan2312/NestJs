import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersRepository } from './users/users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/usersSchema';
import { BlogsController } from './blogs/blogs.controller';
import { BlogsService } from './blogs/blogs.service';
import { BlogsRepository } from './blogs/blogs.repository';
import { Blog, BlogSchema } from './schemas/blogsSchema';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://admin:hecbrhecbr1@cluster0.3r5xv3r.mongodb.net/NestBd',
        ),
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Blog.name, schema: BlogSchema },
        ]),
    ],
    controllers: [AppController, UsersController, BlogsController],
    providers: [
        AppService,
        UsersService,
        UsersRepository,
        BlogsService,
        BlogsRepository,
    ],
})
export class AppModule {}
