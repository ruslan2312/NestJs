import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogInputModelType } from '../type/blogs.type';

@Controller('blogs')
export class BlogsController {
    constructor(protected blogsService: BlogsService) {}
    @Get() getBlogs() {
        return this.blogsService.getBlogs();
    }
    @Get(':blogId') getBlogById(@Param('blogId') blogId) {
        return this.blogsService.getBlogById(blogId);
    }
    @Post() createBlog(@Body() inputModel: CreateBlogInputModelType) {
        return this.blogsService.createBlog(inputModel);
    }
    @Put(':blogId') updateBlogByBlogId(
        @Param('blogId') blogId,
        @Body() updateModel: CreateBlogInputModelType,
    ) {
        return this.blogsService.updateBlogByBlogId(blogId, updateModel);
    }
}
