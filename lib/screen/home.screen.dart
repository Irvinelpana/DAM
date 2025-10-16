import 'package:flutter/material.dart';
import 'package:flutter_application_2/widgets/bubble.widget.dart';
import 'package:flutter_application_2/widgets/input_widget.dart';
import 'package:flutter_application_2/widgets/second_bubble.widget.dart';


class ChatScreen extends StatelessWidget {
  const ChatScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(leading: CircleAvatar(
        backgroundImage: NetworkImage("https://imgs.search.brave.com/2fEU2EVPe7zR5xJfECIcnsgy7f_WH78d05Aiiv4yfIM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/MTk4NzQ4OC9lcy9m/b3RvL2xpbmRvLXBl/cnJvLWRlLXBvbmVy/LXN1LWNhcmEtZW4t/c3VzLXJvZGlsbGFz/LXktZWwtaG9tYnJl/LXNvbnJpZW50ZS1k/ZS1sYXMtbWFub3Mt/cmFzY2Fyc2UtZWwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PV8tUXJHMVFpbXRY/UHR0dWVIZ1BTa2hj/aHdVY244RE50RWNs/VXBWOTkxQ2c9"),
      ),
      title: Text("El toby"),
    ), body: _ChatView());
  }
}

class _ChatView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal:10),
        child: Column(
          children: [
            Expanded(
              child: ListView.builder(
                itemCount: 50,
                itemBuilder: (context,index) {
                  return index % 2 == 0 ? MyBubbleWidget() : MySecondBubbleWidget();
                },
              ),
            ),
            MessageFieldbox(
              onValue: (value) {
                print(value); // Aquí puedes manejar el texto ingresado
              },
            ),
          ],
        ),
      ),
    );
  }
}
