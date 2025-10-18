import 'package:dio/dio.dart';
import 'package:flutter_application_2/config/api_ans.dart';
import 'package:flutter_application_2/entities/msg_entnities.dart';

class GetAnswerApi {
  final _dio = Dio();

  Future<Message> getAnswer() async {
    final Response<dynamic> response = await _dio.get("https://yesno.wtf/api");

    // Debug: imprimir la respuesta cruda de la API en consola
    // Puedes quitar este print cuando confirmes que funciona
    // ignore: avoid_print
    print('API raw response: \\n' + response.data.toString());

    final ApiAnswer apiAnswer = ApiAnswer.fromJson(response.data);

    return apiAnswer.toEntity();
  }
}