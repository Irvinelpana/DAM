import 'package:flutter/material.dart';
import 'package:flutter_application_2/config/provider.dart';
import 'package:flutter_application_2/widgets/bubble.widget.dart';
import 'package:flutter_application_2/widgets/input_widget.dart';
import 'package:flutter_application_2/widgets/second_bubble.widget.dart';
import 'package:flutter_application_2/entities/msg_entnities.dart';
import 'package:provider/provider.dart';

class ChatScreen extends StatelessWidget {
  const ChatScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: CircleAvatar(
          backgroundImage: NetworkImage("https://imgs.search.brave.com/2fEU2EVPe7zR5xJfECIcnsgy7f_WH78d05Aiiv4yfIM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/MTk4NzQ4OC9lcy9m/b3RvL2xpbmRvLXBl/cnJvLWRlLXBvbmVy/LXN1LWNhcmEtZW4t/c3VzLXJvZGlsbGFz/LXktZWwtaG9tYnJl/LXNvbnJpZW50ZS1k/ZS1sYXMtbWFub3Mt/cmFzY2Fyc2UtZWwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PV8tUXJHMVFpbXRY/UHR0dWVIZ1BTa2hj/aHdVY244RE50RWNs/VXBWOTkxQ2c9"),
        ),
        title: Text("El Toby"),
      ),
      body: ChatView(),
    );
  }
}

class ChatView extends StatelessWidget {
  const ChatView({super.key});

  @override
  Widget build(BuildContext context) {
    final ChatProvider provider = context.watch<ChatProvider>();
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
        child: Column(
          children: [
            Expanded(
              child: ListView.builder(
                controller: provider.scrollController,
                itemCount: provider.messages.length,
                itemBuilder: (context, index) {
                  final message = provider.messages[index];
                  return message.who == From.other
                      ? MySecondBubbleWidget(text: message.text)
                      : MyBubbleWidget(text: message.text);
                },
              ),
            ),
            MessageFieldbox(
              onValue: (value) {
                provider.sendMessage(value);
              },
            ),
          ],
        ),
      ),
    );
  }
}
