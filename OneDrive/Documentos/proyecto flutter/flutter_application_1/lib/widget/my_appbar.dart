import 'package:flutter/material.dart';

class MyAppbar extends StatelessWidget implements PreferredSizeWidget {
  final String title;
  final VoidCallback? onPressed;
  
  const MyAppbar({
    super.key, required this.title, this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: Text("APPclik"),
      elevation: 0,
    );
  }

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}