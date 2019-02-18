import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCatDto {
    @ApiModelProperty()
    readonly firstName: string;

    @ApiModelProperty()
    readonly lastName: string;
}