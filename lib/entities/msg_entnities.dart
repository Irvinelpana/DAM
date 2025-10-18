enum From { me, other }

class Message {
  final String text;
  final String? imageUrl;
  final From who;

  Message({required this.text, this.imageUrl, required this.who});
}