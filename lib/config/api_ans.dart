import 'package:flutter_application_2/entities/msg_entnities.dart';

class ApiAnswer {
  String answer;
  bool forced;
  String image;

  ApiAnswer({required this.answer, required this.forced, required this.image});

  factory ApiAnswer.fromJson(Map<String, dynamic> json) => ApiAnswer(
        answer: json["answer"],
        forced: json["forced"],
        image: json["image"],
      );

  Message toEntity() => Message(
    text: (answer.toLowerCase().trim() == "yes")
      ? "Si"
      : (answer.toLowerCase().trim() == "maybe")
        ? "Tal vez"
        : "No",
        who: From.other,
        imageUrl: image,
      );
}