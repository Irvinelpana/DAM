import 'package:flutter/material.dart';
import 'package:flutter_application_2/config/helper.dart';
import 'package:flutter_application_2/entities/msg_entnities.dart';
import 'dart:math';

class ChatProvider extends ChangeNotifier {
  final ScrollController scrollController = ScrollController();
  final GetAnswerApi getAnswerApi = GetAnswerApi();

  List<Message> messages = [
    Message(text: "Hola", who: From.me),
    Message(text: "¿Cómo estás?", who: From.me),
  ];

  Future<void> sendMessage(String text) async {
    if (text.isEmpty) return;

    final Message newMessage = Message(text: text, who: From.me);
    messages.add(newMessage);

    // Llamar a reply siempre que se envíe un mensaje
    reply();

    notifyListeners();
    scrollToBottom();
  }

  Future<void> reply() async {
    try {
      // 30% probabilidad de forzar 'Tal vez' localmente
      if (Random().nextInt(10) < 3) {
        messages.add(Message(text: "Tal vez", who: From.other));
        notifyListeners();
        scrollToBottom();
        return;
      }

      final msg = await getAnswerApi.getAnswer();
      messages.add(msg);
      notifyListeners();
      scrollToBottom();
    } catch (e) {
      // Si la API falla, añadir un mensaje por defecto
      messages.add(Message(text: "Lo siento, no pude responder ahora.", who: From.other));
      notifyListeners();
      scrollToBottom();
    }
  }

  Future<void> scrollToBottom() async {
    await Future.delayed(const Duration(milliseconds: 100));

    scrollController.animateTo(
      scrollController.position.maxScrollExtent,
      duration: const Duration(milliseconds: 300),
      curve: Curves.easeOut,
    );
  }
}