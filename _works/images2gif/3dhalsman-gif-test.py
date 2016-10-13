# -*- coding: utf-8 -*-
#	File: 3dhalsman-gif-test.py
#	Author: Iván Gonzalo Moyano
#	Proyect: Pymiento
#	Date: 08 Sep 2016
# -*-----------------*-

from PIL import Image                                                                          
from images2gif import writeGif


gif_width = 175
gif_height = 175

image_origin = Image.open('demo.jpg')
frame1 = Image.new(image_origin.mode, (gif_width, gif_height))
frame2 = Image.new(image_origin.mode, (gif_width, gif_height))


position1_x = 51
position1_y = 30

position2_x = 235
position2_y = 30


box1 = (position1_x, position1_y, position1_x + gif_width, position1_y + gif_height)
box2 = (position2_x, position2_y, position2_x + gif_width, position2_y + gif_height)

frame1.paste(image_origin.crop(box1))
frame2.paste(image_origin.crop(box2))

frames = []

frames.append(frame1)
frames.append(frame2)


writeGif("3d.gif", frames, duration=0.1, dither=0)