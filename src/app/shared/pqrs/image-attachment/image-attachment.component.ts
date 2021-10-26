import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UploadFilesService } from 'app/shared/services/upload-files.service';

@Component({
  selector: 'app-image-attachment',
  templateUrl: './image-attachment.component.html',
  styleUrls: ['./image-attachment.component.scss']
})
export class ImageAttachmentComponent implements OnChanges {
  @Input() urlImage: string;
  srcImg: string;
  constructor(private uploadFileService: UploadFilesService) { }

  ngOnChanges(): void {
    if (this.urlImage) {
      const extension = this.uploadFileService.getExtensionFile(this.urlImage);
      if (extension?.includes('pdf')) {
        this.srcImg = '../../../../assets/img/pdf.png';
        return;
      }
      this.srcImg = this.urlImage;
    }

  }

}
