import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-pqrs-find',
  templateUrl: './form-pqrs-find.component.html',
  styleUrls: ['./form-pqrs-find.component.scss']
})
export class FormPqrsFindComponent implements OnInit {
  selectedLanguages = ["English"];
  languages = [
    { value: "English", name: 'English' },
    { value: "Spanish", name: 'Spanish' },
    { value: "French", name: 'French' },
    { value: "Russian", name: 'Russian' },
    { value: "German", name: 'German' },
    { value: "Hindi", name: 'Hindi' },
    { value: "Arabic", name: 'Arabic' },
    { value: "Sanskrit", name: 'Sanskrit' },
  ];

  selectedMusic = ["Jazz", "Hip Hop"];
  music = [
    { value: "Rock", name: 'Rock' },
    { value: "Jazz", name: 'Jazz' },
    { value: "Disco", name: 'Disco' },
    { value: "Pop", name: 'Pop' },
    { value: "Techno", name: 'Techno' },
    { value: "Folk", name: 'Folk' },
    { value: "Hip Hop", name: 'Hip Hop' },
  ];

  selectedMovies = ["The Dark Knight", "Perl Harbour"];
  movies = [
    { value: "Avatar", name: 'Avatar' },
    { value: "The Dark Knight", name: 'The Dark Knight' },
    { value: "Harry Potter", name: 'Harry Potter' },
    { value: "Iron Man", name: 'Iron Man' },
    { value: "Spider Man", name: 'Spider Man' },
    { value: "Perl Harbour", name: 'Perl Harbour' },
    { value: "Airplane!", name: 'Airplane!' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
