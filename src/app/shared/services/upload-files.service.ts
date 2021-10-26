import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadFilesService {
  constructor() {}

  getExtensionFile(nameFile: string = ''): string {
    return nameFile?.split('.').pop();
  }

  extensionValidFile(extensionFile: string): boolean {
    const format = extensionFile?.toLocaleLowerCase();
    return format === 'png' || format === 'jpg' || format === 'jpeg' || format === 'pdf';
  }
}
