import pygame
import sys

# Constants
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
PACMAN_SPEED = 3

# Colors
BLACK = (0, 0, 0)
YELLOW = (255, 255, 0)

# Initialize Pygame
pygame.init()
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption('Pac-Man Game')

# Load Pac-Man image
pacman_image = pygame.image.load('Bp.png')

# Pac-Man's starting position
pacman_x = SCREEN_WIDTH // 2
pacman_y = SCREEN_HEIGHT // 2

# Main game loop
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Get the state of the arrow keys
    keys = pygame.key.get_pressed()
    pacman_dx, pacman_dy = 0, 0

    if keys[pygame.K_LEFT]:
        pacman_dx = -PACMAN_SPEED
    elif keys[pygame.K_RIGHT]:
        pacman_dx = PACMAN_SPEED
    elif keys[pygame.K_UP]:
        pacman_dy = -PACMAN_SPEED
    elif keys[pygame.K_DOWN]:
        pacman_dy = PACMAN_SPEED

    # Move Pac-Man
    pacman_x += pacman_dx
    pacman_y += pacman_dy

    # Draw the game
    screen.fill(BLACK)  # Clear the screen
    screen.blit(pacman_image, (pacman_x, pacman_y))

    pygame.display.flip()  # Update the screen

    # Add a clock to control the game's frame rate
    pygame.time.Clock().tick(60)
